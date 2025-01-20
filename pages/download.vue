<template>
  <div class="max-w-6xl mx-auto">
    <Card>
      <template #title>
        <h1 class="text-3xl font-bold text-center mb-4">Download CSV</h1>
      </template>
      <template #content>
        <DataTable :value="users" responsiveLayout="scroll"
                   :paginator="true" :rows="10"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   :rowsPerPageOptions="[5,10,20,50]"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        >
          <Column field="id" header="ID" sortable></Column>
          <Column field="name" header="Name" sortable></Column>
          <Column field="email" header="Email" sortable></Column>
          <Column field="department" header="Department" sortable></Column>
        </DataTable>

        <div class="flex justify-center mt-4">
          <Button
              label="Download CSV"
              icon="pi pi-download"
              @click="downloadCSV"
          />
        </div>
      </template>
    </Card>
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
  const blob = new Blob([bom, csvContent], {type: 'text/csv;charset=utf-8'})

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
