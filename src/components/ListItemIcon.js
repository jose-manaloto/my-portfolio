import * as HIcons from '@heroicons/react/solid'

const ListItemIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
    </>
  )
}

export default ListItemIcon