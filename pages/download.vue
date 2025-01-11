<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-center">Download CSV</h1>

    <!-- データプレビューテーブル -->
    <div class="mb-8 overflow-x-auto">
      <table class="min-w-full bg-white border">
        <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-500">ID</th>
          <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-500">Name</th>
          <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-500">Email</th>
          <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-500">Department</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="px-6 py-4 border-b text-sm">{{ user.id }}</td>
          <td class="px-6 py-4 border-b text-sm">{{ user.name }}</td>
          <td class="px-6 py-4 border-b text-sm">{{ user.email }}</td>
          <td class="px-6 py-4 border-b text-sm">{{ user.department }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- ダウンロードボタン -->
    <div class="text-center">
      <button
          @click="downloadCSV"
          class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Download CSV
      </button>
    </div>
  </div>
</template>

<script setup>
const users = ref([
  { id: 1, name: "John Doe", email: "john@example.com", department: "Engineering" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", department: "Marketing" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", department: "Sales" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", department: "HR" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", department: "Engineering" }
])

const downloadCSV = () => {
  // CSVヘッダー
  const headers = ['ID', 'Name', 'Email', 'Department']

  // データの変換
  const csvContent = [
    headers.join(','),
    ...users.value.map(user => [
      user.id,
      `"${user.name}"`,
      `"${user.email}"`,
      `"${user.department}"`
    ].join(','))
  ].join('\n')

  // BOMを追加してUTF-8でエンコード
  const bom = new Uint8Array([0xEF, 0xBB, 0xBF])
  const blob = new Blob([bom, csvContent], { type: 'text/csv;charset=utf-8' })

  // ダウンロードリンクの作成
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'users.csv'

  // ダウンロードの実行
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // URLの解放
  URL.revokeObjectURL(link.href)
}
</script>
