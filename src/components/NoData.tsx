import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
// import enptyImg from 'assets/images/empty.png'

const Wrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  height: 100%;
  width: 100%;
`

const Nodata = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  .img {
    width: 195px;
    height: 105px;

    ${({ theme }) => theme.mediaQueries.nav} {
      width: 260px;
      height: 140px;
    }
  }

  .text {
    font-weight: 500;
    text-align: center;
    color: #9e9e9e;
    line-height: 1.5;
    //margin-top: 8px;
    font-size: 16px;

      /* ${({ theme }) => theme.mediaQueries.nav} {
      margin-top: 15px;
      font-size: 20px;
    } */
  }
`

interface Props {
    title?: string;
    finish?: boolean
}

const NoData: React.FC<Props> = ({ finish = true, title }) => {
    const { t } = useTranslation()

    return (
        <Wrap>
            <Nodata className='not_info'>
                {/*<img className='img' src={enptyImg} alt='empty' />*/}
                <div className='text'>
                    {!finish ? t('loaded') : (title || t('nodata', 'no data available'))}
                </div>
            </Nodata>
        </Wrap>
    )
}

export default NoData
