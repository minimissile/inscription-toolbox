import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import {TextProps} from "antd/lib/typography/Text";

interface BalanceProps extends TextProps {
  value: number // 数值
  decimals?: number // 小数精度
  unit?: string // 后缀
  isDisabled?: boolean // 是否禁用
  prefix?: string // 前缀
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  className?: string // css类名
}

const Balance: React.FC<BalanceProps> = ({
  value, //
  decimals = 4,
  isDisabled = false,
  unit,
  prefix,
  onClick,
  ...props
}) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <div>
      {prefix && <StyleSpan>{prefix}</StyleSpan>}
      <StyleCountUp
        // start={+previousValue.current}
        start={+value}
        end={+value}
        decimals={decimals}
        duration={0}
        separator=","
      />
      {unit && (
        <StyleSpan style={{marginLeft: '5px'}}>
          {unit}
        </StyleSpan>
      )}
    </div>
  )
}

const StyleCountUp = styled(CountUp)<{ fontFamily?: any }>`
  font-family: ${({ fontFamily }) => fontFamily};
`

const StyleSpan = styled.span<{ fontFamily?: any }>`
  font-family: ${({ fontFamily }) => fontFamily};
`

export default Balance
