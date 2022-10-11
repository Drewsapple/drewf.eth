import type { Load } from "@sveltejs/kit";

export async function load({params}) {
    const post = await import(`../${params.post}.svx`)
    return post
  }