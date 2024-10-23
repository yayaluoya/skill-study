<script lang="tsx">
import { defineComponent, onMounted, KeepAlive, Suspense } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  components: {},
  props: {},
  setup() {
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
                  <Suspense>
                    {{
                      default: () => <Component />,
                      fallback: () => () => {
                        console.log("fasdf");
                        return <div>哈哈哈</div>;
                      },
                    }}
                  </Suspense>
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
