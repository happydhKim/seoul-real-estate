import { useState } from 'react';
import { css } from '@emotion/react';
import colors from 'constants/colors';

import type { FC, TextareaHTMLAttributes } from 'react';

export type TextAreaProps = {
  value?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = (props) => {
  const { value, onFocus, onBlur } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      css={[
        css`
          position: relative;
          display: flex;
          justify-content: space-between;
          transition: background-color 0.2s ease;
          background-color: ${colors.grey50};
          border-radius: 8px;
          align-items: center;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          font-weight: 500;
          color: ${colors.grey800};
          padding: 16px;
          height: auto;
        `,
        isFocused
          ? css`background-color: rgba(25, 74, 166, 0.05);`
          : null,
      ]}
    >
      <textarea
        data-testid="textarea"
        css={css`
          background-color: transparent;
          border: none;
          appearance: none;
          overflow: hidden;
          resize: none;
          box-shadow: 0;
          min-width: 0;
          width: 100%;
          color: ${colors.grey900};
          min-height: 60px;
          &:focus {
            outline: 0;
          }
        `}
        value={value}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
      />
    </div>
  );
};

export default TextArea;
