import { Button, CodeInput, Icon } from "@/components";

const VerificationCode = () => {
  return (
    <>
      <h4 className="mt-16 mb-1 text-lg font-bold">Send Verification Code to:</h4>
      <span className="flex items-center text-secondary mb-7">example@mail.com</span>
      <div className="flex gap-4">
        {[...Array(4)].map((_, index) => (
          <CodeInput key={index} name="code" placeholder="-" />
        ))}
      </div>
      <Button size="md" type="filled" className="flex items-center justify-center mt-5">
        <span className="flex-1">Continue</span>
        <div className="flex items-center justify-center p-2 bg-white/20 rounded-xl">
          <Icon icon="solid-arrow-right" className="w-4 h-4" />
        </div>
      </Button>
    </>
  );
};

export default VerificationCode;
