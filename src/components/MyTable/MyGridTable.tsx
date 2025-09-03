import { HotTable } from '@handsontable/react-wrapper'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/styles/handsontable.min.css'
import 'handsontable/styles/ht-theme-main.min.css'
registerAllModules()

interface Person {
	id: number
	name: string
	address: string
}

const data: Person[] = [
	{ id: 1, name: 'Ted Right', address: '' },
	{ id: 2, name: 'Frank Honest', address: '' },
	{ id: 3, name: 'Joan Well', address: '' },
	{ id: 4, name: 'Gail Polite', address: '' },
	{ id: 5, name: 'Michael Fair', address: '' },
]

export function MyGridTable() {

	return (
		<HotTable
			themeName="ht-theme-main"
			// ref={hotRef}
			data={data}
			height="auto"
			autoWrapRow={true}
			autoWrapCol={true}
			licenseKey="non-commercial-and-evaluation"
		/>
	)
}
