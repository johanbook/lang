export async function request(url: string): Promise<string> {
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return await resp.text();
}
