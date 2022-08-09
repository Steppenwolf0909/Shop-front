import {useSearchUsersQuery} from "../store/github.api";


export function HomePage(){
  const {isLoading, isError, data} = useSearchUsersQuery('ilya')
  console.log(data)
  return(
    <div>home</div>
  )
}