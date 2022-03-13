const sampleProjectList = [
  {
    _id: {
      $oid: "622cdb2eaa2f5a4e7dd16915",
    },
    title: "Placeholder project 1",
    dueDate: {
      $date: "2009-02-15T00:00:00Z",
    },
    users: [
      {
        $oid: "6228c95243471fa6be08c26b",
      },
    ],
    taskLists: [
      {
        title: "valid title",
        tasks: [
          {
            title: "task title 1",
            description: "an arbitratily long description, in string form 1",
            workHours: 84,
            dueDate: {
              $date: "2009-02-15T00:00:00Z",
            },
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd16917",
          },
          {
            title: "task title 2",
            description: "an arbitratily long description, in string form 2",
            workHours: 84,
            dueDate: {
              $date: "2009-02-15T00:00:00Z",
            },
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd16918",
          },
          {
            title: "task title 3",
            description: "an arbitratily long description, in string form 3",
            workHours: 84,
            dueDate: {
              $date: "2009-02-15T00:00:00Z",
            },
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd16919",
          },
        ],
        _id: {
          $oid: "622cdb2eaa2f5a4e7dd16916",
        },
      },
      {
        title: "valid title 2",
        tasks: [
          {
            title: "task title 1",
            description: "an arbitratily long description, in string form 1",
            workHours: 84,
            dueDate: {
              $date: "2009-02-15T00:00:00Z",
            },
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd1691b",
          },
          {
            title: "task title 2",
            description: "an arbitratily long description, in string form 2",
            workHours: 84,
            dueDate: {
              $date: "2009-02-15T00:00:00Z",
            },
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd1691c",
          },
          {
            title: "task title 3",
            description: "an arbitratily long description, in string form 3",
            workHours: 84,
            dueDate: {
              $date: "2009-02-15T00:00:00Z",
            },
            assignedTo: [],
            _id: "622cdb2eaa2f5a4e7dd1691d",
          },
        ],
        _id: {
          $oid: "622cdb2eaa2f5a4e7dd1691a",
        },
      },
    ],
    __v: 0,
  },
];

export default sampleProjectList;
