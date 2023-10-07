import { Button, Icon } from "@/components";

export const QuickExchange = () => {
  return (
    <section className="p-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Quick Exchange</h4>
        <div className="flex gap-3">
          <button>
            <Icon icon="settings" className="h-6 w-6" />
          </button>
          <button>
            <Icon icon="time-past" className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-8 mb-7 flex flex-col gap-3 relative">
        <div className="bg-gray-800 p-5 rounded-primary">
          <p className="text-sm flex items-center justify-between mb-2">
            <span className="text-secondary">I have:</span>
            <span className="text-white">0.12000 BTC</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex">
              <span className="font-bold">BTC</span>
              <Icon icon="solid-angle-down-small" className="w-6 h-6 ml-2" />
            </div>
            <span className="font-bold text-lg">0.01</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[14px] border-gray-700 rounded-full bg-primary p-3">
          <Icon icon="solid-arrow-down-arrow-up" className="h-6 w-6" />
        </div>
        <div className="bg-gray-800 p-5 rounded-primary">
          <p className="text-sm flex items-center justify-between mb-2">
            <span className="text-secondary">I want:</span>
            <span className="text-white">12000 USDT</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex">
              <span className="font-bold">USDT</span>
              <Icon icon="solid-angle-down-small" className="w-6 h-6 ml-2" />
            </div>
            <span className="font-bold text-lg">403</span>
          </div>
        </div>
      </div>

      <Button size="lg">
        <span className="text-center">Exchange</span>
      </Button>
    </section>
  );
};
