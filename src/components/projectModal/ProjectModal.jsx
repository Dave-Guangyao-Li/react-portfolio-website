import Modal from '@material-ui/core/Modal'

import { makeStyles } from '@material-ui/core/styles'
// use the makeStyles hook to create a style object
const useStyles = makeStyles((theme) => ({
  // modal styles
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // style for the paper
  paper: {
    backgroundColor: 'black',
    width: '80%',
    height: '80%',
    borderRadius: 10,
    padding: 10,
  },
}))

export default function ProjectModal() {
  return <div></div>
}
