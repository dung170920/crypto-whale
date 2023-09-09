import { Button, Input, Icon, IconButton } from "@/components";
import { Apple, FB, Google } from "@/assets";

const Login = () => {
  const loginMethods = [FB, Apple, Google];

  return (
    <div className="flex flex-col justify-between flex-1">
      <form onSubmit={() => {}}>
        <Input name="email" placeholder="Email Address" icon="envelope" />
        <Input name="password" placeholder="Password" icon="lock" isPassword />
        <Button size="md" type="filled" className="flex items-center justify-center">
          <span className="flex-1">Continue</span>
          <div className="p-2 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon icon="solid-arrow-right" className="h-4 w-4" />
          </div>
        </Button>
      </form>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="relative w-2/3">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-500" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-800 px-3 text-sm font-semibold text-white">Or Continue with</span>
          </div>
        </div>
        <div className="flex gap-5">
          {loginMethods.map((Item, index) => (
            <IconButton key={index} icon={<Item />} color="secondary" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
