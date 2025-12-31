export default function WelcomeText({ name }) {
  return (
    <div className="flex flex-col items-center text-center px-6 z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
        Hey {name},
      </h1>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        I&apos;m your WingMann,
      </h2>
      <p className="text-lg md:text-xl text-white/80 font-normal mt-1">
        let&apos;s find you a great date!
      </p>
    </div>
  );
}

