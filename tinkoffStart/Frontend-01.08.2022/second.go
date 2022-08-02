// 2 задание
package second

import (
	"fmt"
	"sort"
)

func main() {
	var colTeam int
	var team [3]string
	var allTeam []string
	var maxWin int = 0
	var checkInt int = 0

	fmt.Scan(&colTeam)

	for i := 0; i < colTeam; i++ {
		fmt.Scan(&team[0], &team[1], &team[2])
		stringList := []string{team[0], team[1], team[2]}
		sort.Strings(stringList)
		var text string
		for _, v := range stringList {
			text += v
		}
		allTeam = append(allTeam, text)
	}

	for i := 0; i < len(allTeam); i++ {
		for j := i + 1; j < len(allTeam); j++ {
			if allTeam[i] == allTeam[j] {
				checkInt++
			}

		}
		if checkInt > maxWin {
			maxWin = checkInt
		}
		checkInt = 0
	}
	fmt.Println(maxWin + 1)
}
