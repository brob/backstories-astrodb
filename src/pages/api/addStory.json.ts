import { Story, db } from "astro:db";
import sanitize from "sanitize-html";



export const POST = async ({request}) => {
    const data = await request.json();

    try {
        const {promptId, title, story } = data

        const res = await db.insert(Story).values({
            promptId,
            title: sanitize(title),
            story: sanitize(story)
        })
        if (res) {
            return new Response(
              JSON.stringify({
                message: "success",
                data: res,
                success: true,
              }),
              {
                status: 200,
              }
            );
          } else {
            throw new Error("There was a problem with the db response.");
          }
    } catch(e) {
        console.error(e);
        return new Response(
          JSON.stringify({
            message: e,
            success: false,
          }),
          {
            status: 404,
          }
        );
    
    }


}