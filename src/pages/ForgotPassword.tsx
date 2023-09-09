import { ForgotPasswordIllustration } from "@/assets";
import { Button, Icon, Input } from "@/components";

const ForgotPassword = () => {
  return (
    <>
      <div className="h-[320px] w-full flex items-center justify-center">
        <ForgotPasswordIllustration />
      </div>
      <form>
        <Input name="email" placeholder="Email Address" icon="envelope" />
        <Button size="md" type="filled" className="flex items-center justify-center">
          <span className="flex-1">Continue</span>
          <div className="p-2 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon icon="solid-arrow-right" className="h-4 w-4" />
          </div>
        </Button>
      </form>
    </>
  );
};

export default ForgotPassword;
