function FullName({ name = "fullName", value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-300">نام کامل</label>

      <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 focus-within:border-[#F2CA50]/50 focus-within:shadow-[0_0_30px_rgba(242,202,80,0.08)]">
        <input
          name={name}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="نام و نام خانوادگی"
          className="w-full h-full bg-transparent text-white outline-none placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
}

export default FullName;
