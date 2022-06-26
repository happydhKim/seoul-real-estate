import { css } from '@emotion/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import colors from 'constants/colors';

type Props = JSX.IntrinsicElements['select'];

const Select = ({ className, ...rest }: Props) => {
  return (
    <div
      className={className}
      css={css`
        position: relative;
      `}
    >
      <select
        data-testid="seletbox"
        {...rest}
        css={css`
          font-size: 12px;
          font-weight: 500;
          line-height: 1.5;
          height: 22px;
          transition: background-color 0.2s ease;
          background-color: ${colors.grey50};
          border-radius: 12px;
          align-items: center;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          color: ${colors.grey800};
          width: 100%;
          margin: 0;
          border: 0 solid transparent;
          padding: 0;
          outline: none;
          appearance: none;
          padding: 0 12px 0 8px;
        `}
      />
      <KeyboardArrowDownIcon
        css={css`
          position: absolute;
          top: 0;
          right: 0;
        `}
      />
    </div>
  );
};

export default Select;
