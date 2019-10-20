import { css } from 'styled-components';

export const typography = {
  title: css`
    font-size: 22;
    color: ${(props) => props.theme.title};
    font-weight: bold;
  `,
  subTitle: css`
    font-size: 16;
    color: ${(props) => props.theme.subTitle};
  `,
  descriptions: css`
    font-size: 14;
    color: ${(props) => props.theme.subTitle};
  `,
};
