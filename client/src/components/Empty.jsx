function EmptySavedHome({ text }) {
  return (
    <div className="mt-6 rounded-2xl border border-dark-danger-bright/15 bg-dark-danger-bg px-5 py-4 text-center backdrop-blur-sm">
      <p className="font-medium text-dark-danger-soft">{text}</p>
    </div>
  );
}

export default EmptySavedHome;
