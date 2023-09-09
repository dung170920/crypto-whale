import { Button, Input, Icon } from "@/components";

const Login = () => {
  return (
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
  );
};

export default Login;
