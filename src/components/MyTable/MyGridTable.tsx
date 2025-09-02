import { HotTable, type HotTableRef } from '@handsontable/react-wrapper'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/styles/handsontable.min.css'
import 'handsontable/styles/ht-theme-main.min.css'
import { useEffect, useRef } from 'react'
registerAllModules()

/** Bind data */
const data: Array<Array<string | number>> = [
	['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
	['2017', 10, 11, 12, 13, 15, 16],
	['2018', 10, 11, 12, 13, 15, 16],
	['2019', 10, 11, 12, 13, 15, 16],
	['2020', 10, 11, 12, 13, 15, 16],
	['2021', 10, 11, 12, 13, 15, 16]
]

const newData: Array<Array<string | number>> = [
	['', 'Vercel', 'Nissan', 'Vite', 'Vue', 'React', 'Foundation'],
	['2048', 111, 222, 333, 444, 5, 6],
	['2048', 111, 222, 333, 444, 5, 6],
	['2048', 111, 222, 333, 444, 5, 6],
	['2048', 111, 222, 333, 444, 5, 6],
	['2048', 111, 222, 333, 444, 5, 6]
]

// 具有空数据源的自定义数据结构
export function MyGridTable() {
	const hotRef = useRef<HotTableRef>(null)

	useEffect(() => {
		const hot = hotRef.current?.hotInstance
		if (!hot) return
		let id = null
		// using API Method changes the cell data
		hot.setDataAtCell(0, 0, 'Ford')
		id = setTimeout(() => {
			hot.loadData(newData)
		}, 2000)
		return () => clearTimeout(id)
	}, [])
	return (
		<HotTable
			themeName="ht-theme-main"
			ref={hotRef}
			data={data}
			height="auto"
			autoWrapRow={true}
			autoWrapCol={true}
			licenseKey="non-commercial-and-evaluation"
		/>
	)
}
