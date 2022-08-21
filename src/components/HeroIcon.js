import * as HIcons from '@heroicons/react/solid'

const HeroIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="w-10 inline-block mb-4" />
    </>
  )
}

export default HeroIcon