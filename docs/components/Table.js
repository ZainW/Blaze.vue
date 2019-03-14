export default {
  header: 'Table',
  description: 'This is a customizable table component.',
  snippet:
`
<ao-table
  :headers="headers"
  :is-clickable="isClickable"
  :is-scrollable="isScrollable"
  :show-no-data-text="showNoDataText"
  :no-data-text="noDataText"
  :sort-by="sortBy"
  :order="order"
  class="component-example-table"
  @sortTable="sortTable">
  <tr
    v-for="user in filteredUsers"
    :key="user.id">
    <td>{{ user.id }}</td>
    <td>{{ user.first_name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.friends }}</td>
  </tr>
</ao-table>

data () {
  return {
    headers: [
      { field: 'id', title: 'ID', sortable: true },
      { field: 'first_name', title: 'First Name', sortable: true, hidden: true },
      { field: 'last_name', title: 'Last Name', sortable: true, alignRight: true },
      { field: 'friends', title: 'Friends', sortable: true }
    ],
    users: [
      { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'friends': '44' },
      { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'friends': '5' },
      { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'friends': '2' },
      { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'friends': '8' },
      { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'friends': '10' },
      { 'id': 6, 'first_name': 'Rick', 'last_name': 'Potter', 'friends': '102' },
      { 'id': 7, 'first_name': 'Harry', 'last_name': 'Sanchez', 'friends': '23' },
      { 'id': 8, 'first_name': 'Joy', 'last_name': 'Mann', 'friends': '1' },
      { 'id': 9, 'first_name': 'Adam', 'last_name': 'Hansen', 'friends': '0' },
      { 'id': 10, 'first_name': 'Marge', 'last_name': 'Grey', 'friends': '55' }
    ],
    sortBy: 'id',
    order: 'asc',
    isClickable: true,
    isScrollable: false,
    showNoDataText: false,
    noDataText: 'No Data'
  }
},
computed: {
  filteredUsers () {
    return this.showNoDataText ? [] : this.users
  }
},
methods: {
  sortTable (sortBy, order) {
    this.users = orderBy(this.users, sortBy, order)
  }
}`,
  apiRows: [
    { name: 'condensed', type: 'Boolean', default: 'false', description: 'When set to true, this prop reduces appropriate styling to make table look condensed.' },
    { name: 'headers', type: 'Array', default: 'null', description: 'This prop contains an array of objects with header title, field and a sortable boolean to determine if your data should be sorted by that header.' },
    { name: 'headers > alignRight,<br /> hidden', type: 'Boolean', default: 'false', description: 'Include the <strong>alignRight</strong> property to align the header to the right side of the space given. <br />Include a <strong>hidden</strong> property to hide a given \'th\' header.' },
    { name: 'isClickable', type: 'Boolean', default: 'false', description: 'When set to true, this prop adds appropriate styling to signify that the table and table rows are clickable.' },
    { name: 'isScrollable', type: 'Boolean', default: 'false', description: 'When set to true, this prop adds appropriate styling to make table body scroll on the y-axis if it hits a max-height.' },
    { name: 'noDataText', type: 'String', default: '', description: 'Text to show when table has no data.' },
    { name: 'order', type: 'String ("asc" or "desc")', default: 'desc', description: 'This prop defines which order (ascending or decending) is the default.' },
    { name: 'showNoDataText', type: 'Boolean', default: 'false', description: 'When set to true, this prop displays the value of prop noDataText.' },
    { name: 'sortBy', type: 'String', default: 'null', description: 'This prop defines the default header to sort by.' },
    { name: 'vAlign', type: 'String ("top" or "middle")', default: 'top', description: 'This prop defines which vertical alignment (top or middle) is the default.' }
  ]
}
