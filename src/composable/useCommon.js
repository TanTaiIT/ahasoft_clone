import { useStore } from 'vuex'

export default function useShowLoading() {
  const store = useStore()
  const setLoading = (loading) => {
    console.log('zo day')
    store.commit('authentication/setLoadingData', loading)
  }

  return {
    setLoading
  }
}