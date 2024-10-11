import { Navbar } from '../Navbar';

export function Header() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Navbar />
        <div className="lg:-order-1 text-center lg:text-left lg:mb-10">
          <h1 className="text-5xl text-white font-bold">Ana Ferreira</h1>
          <h2 className="text-xl text-white">Desenvolvedora Front-end</h2>
        </div>
      </div>
    </>
  );
}
