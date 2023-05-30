import { memo } from 'react';
import { AspectAssessmentEvent } from '../model/AspectAssessment';

export interface AspectAssesmentItemProps extends AspectAssessmentEvent {
  optionValue: number;
  setSelectValue: (evt: AspectAssessmentEvent) => void;
}
export function AspectAssesmentItem({
  value,
  index,
  setSelectValue,
  optionValue,
}: AspectAssesmentItemProps) {
  const options = [];
  for (let i = 1; i <= optionValue; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <select
      className="sm:flex-col w-20 mx-4 border rounded"
      defaultValue={value}
      onChange={(evt) =>
        setSelectValue({
          value: Number(evt.target.value),
          index,
        })
      }
    >
      {options}
    </select>
  );
}

export const MemoAspectAssesmentItem = memo(AspectAssesmentItem);
