<template>
  <div class="mx-6 rounded-md overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">No</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">User Domain</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Regional</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Status Admin</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-3 whitespace-nowrap">1</td>
          <td class="px-6 py-3 whitespace-nowrap">husein</td>
          <td class="px-6 py-3 whitespace-nowrap">JATIM</td>
          <td class="px-6 py-3 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-green-100 text-green-800">Admin Web</span></td>
          <td class="px-6 py-3 whitespace-nowrap">
            <button class="inline bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md">Edit</button>
            <button class="inline bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md">Delete</button>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-3 whitespace-nowrap">2</td>
          <td class="px-6 py-3 whitespace-nowrap">kaisar</td>
          <td class="px-6 py-3 whitespace-nowrap">JATIM</td>
          <td class="px-6 py-3 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-blue-100 text-blue-800">Admin Regional</span></td>
          <td class="px-6 py-3 whitespace-nowrap">
            <button class="inline bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md">Edit</button>
            <button class="inline bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md">Delete</button>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-3 whitespace-nowrap">3</td>
          <td class="px-6 py-3 whitespace-nowrap">syukur</td>
          <td class="px-6 py-3 whitespace-nowrap">JATIM</td>
          <td class="px-6 py-3 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-red-100 text-red-800">Admin User</span></td>
          <td class="px-6 py-3 whitespace-nowrap">
            <button class="inline bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md">Edit</button>
            <button class="inline bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserManagementTable',
}
</script>