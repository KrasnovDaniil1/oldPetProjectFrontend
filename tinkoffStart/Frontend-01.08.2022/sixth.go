// 6 задание
package sixth

import (
	"fmt"
	"sort"
)

func main() {
	var colLift int
	var liftGroup [2]string
	var allGroup []string
	var repeatFloor int = 0

	fmt.Scan(&colLift)
	for i := 0; i < colLift; i++ {
		fmt.Scan(&liftGroup[0], &liftGroup[1])
		allGroup = append(allGroup, liftGroup[0]+liftGroup[1])
	}
	sort.Strings(allGroup)
	for i := 0; i < len(allGroup)-3; i++ {
		lastFloor1 := allGroup[i][len(allGroup[0])-1:]
		lastFloor2 := allGroup[i+1][len(allGroup[0])-1:]
		lastFloor3 := allGroup[i+2][len(allGroup[0])-1:]

		if lastFloor1 == lastFloor2 && lastFloor1 == lastFloor3 {
			repeatFloor++
		}
	}

	fmt.Println(len(allGroup) - repeatFloor)
}
