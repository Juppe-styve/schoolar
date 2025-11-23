import SignUpCard from "../components/SignUpCard";

export default function SignUp() {
  const BG_IMAGE =
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <img
          src={BG_IMAGE}
          alt="students"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 px-6 m-auto justify-center">
        <SignUpCard />
      </div>
    </div>
  );
}
