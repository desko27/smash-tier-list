import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useOnScreen from '../../hooks/useOnScreen'

import HeartSolidIcon from '../../icons/exclamation-circle.svg'

import FilterInput from '../../tierlist/FilterInput'
import GameSelect from '../../tierlist/GameSelect'
import HeaderIcon from '../../tierlist/HeaderIcon'
import SuperTitle from '../../tierlist/SuperTitle'

import styles from './index.module.css'

const SHADOW_FILTER_OFFSET = 15
const PADDING_MOBILE_OFFSET = 10

const isClient = typeof window !== 'undefined'
const isScrollZero = () => isClient && window.scrollY === 0

const Header = ({
  gameData,
  nextGameSlug,
  prevGameSlug,
  setCharactersByTier,
  isNoticeVisible,
  setIsNoticeVisible
}) => {
  const [mainScrollFlagIsIntersecting, mainScrollFlagRef] = useOnScreen({ once: false })
  const [mobileScrollFlagIsIntersecting, mobileScrollFlagRef] = useOnScreen({ once: false })

  const isMainScrolling = !isScrollZero() && !mainScrollFlagIsIntersecting
  const isMobileScrolling = !isScrollZero() && !mobileScrollFlagIsIntersecting

  const handleNoticeClick = () => {
    if (!isNoticeVisible) window.scrollTo(0, 0)
    setIsNoticeVisible(!isNoticeVisible)
  }

  return (
    <>
      <div ref={mainScrollFlagRef} />
      <div
        className={
          cx(styles.wrapper,
            isMainScrolling && styles.wrapperScrolling,
            isMobileScrolling && styles.wrapperScrollingMobile)
        }
      >
        <div className={styles.wrapperFirstLine}>
          <SuperTitle>Smash Tier List.</SuperTitle>
          <GameSelect
            gameData={gameData}
            prevGameSlug={prevGameSlug}
            nextGameSlug={nextGameSlug}
          />
        </div>
        <div
          ref={mobileScrollFlagRef}
          style={{ transform: `translateY(${PADDING_MOBILE_OFFSET - SHADOW_FILTER_OFFSET}px)` }}
        />
        <div className={styles.wrapperBreakLine}>
          <FilterInput
            gameSlug={gameData.slug}
            setCharactersByTier={setCharactersByTier}
          />
          <HeaderIcon
            icon={<HeartSolidIcon style={{ fill: isNoticeVisible ? '#f8e71c' : '#9b9b9b' }} />}
            onClick={handleNoticeClick}
          />
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  gameData: PropTypes.object.isRequired,
  nextGameSlug: PropTypes.string.isRequired,
  prevGameSlug: PropTypes.string.isRequired,
  setCharactersByTier: PropTypes.func.isRequired,
  isNoticeVisible: PropTypes.bool,
  setIsNoticeVisible: PropTypes.func.isRequired
}

export default Header
