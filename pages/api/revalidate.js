async function handler(req, res) {
  const { secret, revalidatePath } = req.body.data;

  if (secret !== process.env.NEXT_PUBLIC_ODISR) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.unstable_revalidate(revalidatePath);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}

export default handler;
