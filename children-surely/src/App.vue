<template>
  <div>
    <h2>surely 表格</h2>
    <STable
      :data-source="dataSource"
      bordered
      :scroll="{ x: 1500 }"
      :columns="columns"
    ></STable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import STable, { type STableProps } from "@surely-vue/table";
import "@surely-vue/table/dist/index.less";
const cls = ref(true);

const msg = ref("zsx");

const dataSource = ref([
  {
    key1: "key1",
    key2: "key2",
    key3: "key3",
    key4: "key4",
    key5: "key5",
    key6: "key6",
    key7: "key7",
    key8: "key8",
    key9: "key9",
    key10: "key10",
    key11: "key11",
    key12: "key12",
    key13: "key13",
    key14: "key14",
    key15: "key15",
    key16: "key16",
    key17: "key17",
    key18: "key18",
    key19: "key19",
    key20: "key20",
    key21: "key21",
    key22: "key22",
    key23: "key23",
    key24: "key24",
    key25: "key25",
    key26: "key26",
  },
]);
const columns = ref<STableProps["columns"]>([
  {
    dataIndex: "key1",
    key: "key1",
    title: "ke1",
    fixed: "left",
    width: 100,
  },
  {
    dataIndex: "key2",
    key: "key2",
    title: "ke2",
    fixed: "left",
    width: 100,
  },
  {
    dataIndex: "key3",
    key: "key3",
    title: "ke3",
    width: 100,
  },
  {
    dataIndex: "key4",
    key: "key4",
    title: "ke4",
    width: 100,
  },
  {
    dataIndex: "key5",
    key: "key5",
    title: "ke5",
    width: 100,
  },
  {
    dataIndex: "key6",
    key: "key6",
    title: "ke6",
    width: 100,
  },
  {
    dataIndex: "key7",
    key: "key7",
    title: "ke7",
    width: 100,
  },
  {
    dataIndex: "key8",
    key: "key8",
    title: "ke8",
    width: 100,
  },
  {
    dataIndex: "key9",
    key: "key9",
    title: "ke9",
    width: 100,
  },
  {
    dataIndex: "key10",
    key: "key10",
    title: "ke10",
    width: 100,
  },
  {
    dataIndex: "key11",
    key: "key11",
    title: "ke11",
    width: 100,
  },
  {
    dataIndex: "key12",
    key: "key12",
    title: "ke12",
    width: 100,
  },
  {
    dataIndex: "key13",
    key: "key13",
    title: "ke13",
    width: 100,
  },
  {
    dataIndex: "key15",
    key: "key15",
    title: "ke15",
    width: 100,
  },
  {
    dataIndex: "key16",
    key: "key16",
    title: "ke16",
    width: 100,
  },
  {
    dataIndex: "key17",
    key: "key17",
    title: "ke17",
    width: 100,
  },
  {
    dataIndex: "key18",
    key: "key18",
    title: "ke18",
    width: 100,
  },
  {
    dataIndex: "key19",
    key: "key19",
    title: "ke19",
    width: 100,
  },
  {
    dataIndex: "key20",
    key: "key20",
    title: "ke20",
    width: 100,
  },
  {
    dataIndex: "key21",
    key: "key21",
    title: "ke21",
    width: 100,
  },
  {
    dataIndex: "key23",
    key: "key23",
    title: "ke23",
    width: 100,
  },
  {
    dataIndex: "key24",
    key: "key24",
    title: "ke24",
    width: 100,
  },
  {
    dataIndex: "key25",
    key: "key25",
    title: "ke25",
    width: 100,
  },
  {
    dataIndex: "key26",
    key: "key26",
    title: "ke26",
    width: 100,
  },
]);
</script>
