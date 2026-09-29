interface RatingFilterProps { value: number; onChange: (value: number) => void; }
const OPTIONS = [{ value: 0, label: "Any rating" }, { value: 4, label: "4.0+ rating" }, { value: 4.5, label: "4.5+ rating" }];
export function RatingFilter({ value, onChange }: RatingFilterProps) { return <div className="field"><label htmlFor="rating">Rating</label><select id="rating" value={value} onChange={(e) => onChange(Number(e.target.value))}>{OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>; }
