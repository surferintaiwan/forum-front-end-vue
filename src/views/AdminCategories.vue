<template>
  <div class="container py-5">
     <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
            v-model="newCategoryName"
          >
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            v-on:click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div 
                v-show="!category.isEditing" 
                class="category-name"
            >
              {{ category.name }}
            </div>
            <input 
                v-show="category.isEditing"
                v-model="category.name"
                type="text"
                class="form-control"
            >
            <span
                v-show="category.isEditing"
                class="cancel"
                v-on:click="handleCancel(category.id)"
            >
            X
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              v-on:click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
                v-show="category.isEditing"
                type="button"
                class="btn tbn-link mr-2"
                v-on:click.stop.prevent="updateCategory({categoryId: category.id, name: category.name})"
            >
                Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              v-on:click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
//  2. 定義暫時使用的資料
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}

import uuid from 'uuid/v4'
export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data () {
    return {
      categories: [],
      newCategoryName: ''
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created () {
    this.fetchCategories()
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    fetchCategories () {
      // 在每一個 category 中都添加一個 isEditing 屬性
      this.categories = dummyData.categories.map(category => ({
        ...category,
        isEditing: false
      }))
    },
    createCategory() {
        this.categories.push({
            id: uuid(),
            name: this.newCategoryName
        })
        this.newCategoryName = ''
    },
    deleteCategory(categoryId) {
        this.categories = this.categories.filter(
           category => category.id !== categoryId 
        )
    },
    toggleIsEditing(categoryId) {
        this.categories = this.categories.map(category => {
            if (category.id !== categoryId) return category
             // 如果迴圈中的 category.id 是欲修改的 categoryId 則改變 isEditing 的值
             return {
                 ...category,
                 nameCached: category.name,
                 isEditing: !category.isEditing
             }
        })
    },
    updateCategory({categoryId, name}) {
        console.log(name)
        this.toggleIsEditing(categoryId)
    },
    handleCancel(categoryId) {
        this.categories = this.categories.map(category => {
            if (category.id !== categoryId) return category
            return {
                ...category,
                name:  category.nameCached,
            }
        })
        this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>