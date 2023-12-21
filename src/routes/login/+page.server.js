import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (email == "ashkiecharles@gmail.com" && password == "password")
    {
      cookies.set("access","true", {path: '/'});
      throw redirect(302, "/dashboard")
    }

    return {
      email,
      message: "Email or Password is not Valid",
    };
  }
}