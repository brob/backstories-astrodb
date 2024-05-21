import { column, defineDb, defineTable } from 'astro:db';


const Prompt = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    description: column.text(),
  }
})

const Story = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    title: column.text(),
    story: column.text(),
    promptId: column.number({ 
      references: () => Prompt.columns.id
      
    })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Prompt,
    Story
  }
});
