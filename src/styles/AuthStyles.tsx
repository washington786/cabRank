import { StyleSheet } from 'react-native'
import { colors, rgba } from '../globals/Colors'

export const AuthStyles = StyleSheet.create({
    input: {
        marginVertical: 8,
      },
      btn: {
        alignSelf: "flex-end",
        marginVertical: 5,
        zIndex:100
      },
      btnCon: {
        backgroundColor: colors.primary_10,
        paddingVertical: 3,
        borderRadius: 2,
        zIndex:100
      },
      lbl:{
        textTransform:"uppercase",
        fontSize:18
      },
      outBtn:{
        marginVertical:12,
        paddingVertical: 3,
        borderRadius: 2,
        zIndex:100
      },
      lb:{
        color:rgba.grey_7,
        textTransform:"uppercase"
      }
})