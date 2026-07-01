import { APP_NAME, AppLogo } from "./AppLogo";

const PageLoader = () => {
  return (
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute h-72 w-72 animate-[pulse-glow_3s_ease-in-out_infinite] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative flex flex-col items-center gap-5">
        <div className="animate-[float_2.4s_ease-in-out_infinite]">
          <AppLogo
            size={44}
            className="rounded-xl shadow-lg shadow-accent/10"
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium tracking-tight text-foreground/80">
            {APP_NAME}
          </span>

          {/* Modern indicator: three dots scaling in sequence */}
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 animate-[dot-scale_1.4s_ease-in-out_infinite] rounded-full bg-accent [animation-delay:0s]" />
            <span className="size-1.5 animate-[dot-scale_1.4s_ease-in-out_infinite] rounded-full bg-accent [animation-delay:0.16s]" />
            <span className="size-1.5 animate-[dot-scale_1.4s_ease-in-out_infinite] rounded-full bg-accent [animation-delay:0.32s]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes dot-scale {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
