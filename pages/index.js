export default function Home() {
  return (
    <>
      <div className="p-2 bg-gray-200 text-center">top banner</div>
      <div className="flex-1 flex">
        <div className="w-24 bg-gray-600 flex flex-col justify-between text-center">
          <div className="py-4">
            <p>contact</p>
            <p>inbox</p>
          </div>
          <div className="pb-4">settings</div>
        </div>
        <div className="flex-1 overflow-y-scroll p-2">
          {Array.from(Array(100).keys()).map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </div>
    </>
  );
}
