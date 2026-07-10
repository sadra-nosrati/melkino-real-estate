function RepeatPassword({ name = "repeatPassword", value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-300">تکرار رمز عبور</label>

      <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 focus-within:border-dark-primary/50 focus-within:shadow-[0_0_30px_rgba(242,202,80,0.08)]">
        <input
          name={name}
          value={value}
          onChange={onChange}
          type="password"
          placeholder="تکرار رمز عبور"
          className="w-full h-full bg-transparent text-white outline-none placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
}

export default RepeatPassword;
