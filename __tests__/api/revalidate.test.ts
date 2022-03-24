import revalidate from "../../pages/api/revalidate";

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe("Given the 'revalidate' function", () => {
  describe("When called with a valid key", () => {
    test("Then it should call unstable revalidate andrespond", async () => {
      const expectedCallValue = { revalidated: true };
      const req = {
        body: {
          data: {
            secret: "correct-public-odisr",
            revalidatePath: "/whatever/path",
          },
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        json: jest.fn(),
        unstable_revalidate: jest.fn(),
      };

      process.env.NEXT_PUBLIC_ODISR = "correct-public-odisr";
      await revalidate(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedCallValue);
    });
  });

  describe("When called with an ivalid key", () => {
    test("Then it should return a 401 and 'invalid token' message", async () => {
      const expectedCallValue = { message: "Invalid token" };
      const req = {
        body: {
          data: {
            secret: "invalid-secret",
            revalidatePath: "/whatever/path",
          },
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        json: jest.fn(),
        unstable_revalidate: jest.fn(),
      };

      process.env.NEXT_PUBLIC_ODISR = "correct-public-odisr";
      await revalidate(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedCallValue);
    });
  });

  describe("When an error ocurs", () => {
    test("Then it should return a 500 and 'error revalidating' message", async () => {
      const expectedCallValue = "Error revalidating";
      const req = {
        body: {
          data: {
            secret: "correct-public-odisr",
            revalidatePath: "/whatever/path",
          },
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        json: jest.fn(),
        unstable_revalidate: jest.fn().mockImplementation(() => {
          throw new Error();
        }),
      };

      process.env.NEXT_PUBLIC_ODISR = "correct-public-odisr";
      await revalidate(req, res);

      expect(res.send).toHaveBeenCalledWith(expectedCallValue);
    });
  });
});
