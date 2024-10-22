<script lang="tsx">
import { defineComponent, onMounted, KeepAlive } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  components: {},
  props: {},
  setup() {
    onMounted(() => {});
    return {};
  },
  render() {
    return (
      <div class="app">
        <RouterView>
          {{
            default: ({ Component }: any) => {
              return (
                <KeepAlive>
                  <Component />
                </KeepAlive>
              );
            },
          }}
        </RouterView>
      </div>
    );
  },
});
</script>

<style scoped lang="scss"></style>
