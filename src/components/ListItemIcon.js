import * as HIcons from '@heroicons/react/solid'

const ListItemIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="flex-shrink-0 w-6 h-6 mr-4 text-oat-icon dark:text-green-400" />
    </>
  )
}

export default ListItemIcon