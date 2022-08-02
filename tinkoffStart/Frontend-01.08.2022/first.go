// 1 задание
package first

import "fmt"

func main() {
	var (
		x11, y11, x12, y12, x21, y21, x22, y22 int
	)
	fmt.Scan(&x11, &y11, &x12, &y12)
	fmt.Scan(&x21, &y21, &x22, &y22)
	if x12-x21 >= y12-y21 {
		fmt.Println((x12 - x21) * (x12 - x21))
	} else {
		fmt.Println((y12 - y21) * (y12 - y21))
	}
}
