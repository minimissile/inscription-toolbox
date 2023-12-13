import React, {useEffect, useRef} from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'


const Balance = ({
                     value, //
                     color = 'text',
                     decimals = 4,
                     isDisabled = false,
                     unit,
                     prefix,
                     onClick,
                     fontFamily = 'DINBold',
                     ...props
                 }) => {
    const previousValue = useRef(0)

    useEffect(() => {
        previousValue.current = value
    }, [value])

    return (
        <Text color={isDisabled ? 'textDisabled' : color} onClick={onClick} {...props} fontFamily={fontFamily}>
            {prefix && <StyleSpan fontFamily={fontFamily}>{prefix}</StyleSpan>}
            <StyleCountUp
                // start={+previousValue.current}
                start={+value}
                end={+value}
                decimals={decimals}
                duration={0}
                separator=","
                fontFamily={fontFamily}
            />
            {unit && (
                <StyleSpan style={{marginLeft: '5px'}} fontFamily={fontFamily}>
                    {unit}
                </StyleSpan>
            )}
        </Text>
    )
}

const StyleCountUp = styled(CountUp) < {fontFamily} > `
  font-family: ${({fontFamily}) => fontFamily};
`

const StyleSpan = styled.span < {fontFamily} > `
  font-family: ${({fontFamily}) => fontFamily};
`

export default Balance
