import { Input } from "@/components";

const Login = () => {
  return (
    <form onSubmit={() => {}}>
      <Input name="email" label="Email" placeholder="Email Address" icon="envelope" />
      <Input name="password" label="Password" placeholder="Password" icon="lock" isPassword />
    </form>
  );
};

export default Login;
