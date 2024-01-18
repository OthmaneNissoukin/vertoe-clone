import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Navbar from "../ui/Navbar";
function Component() {
  return (
    <>
      <Navbar />
      <section className="h-dvh flex justify-center pt-12">
        <form className="flex max-w-md flex-col gap-4 shrink-0 grow px-5">
          <h1 className="text-3xl text-center">Sign In</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="username or e-mail address" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required placeholder="**************" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Sign In</Button>
        </form>
      </section>
    </>
  );
}

export default Component;
