<template>
  <div class="epic-container-column__project">
    <el-popover
      :ref="project.name + 'popover'"
      placement="bottom"
      width="500"
      :open-delay="300"
      :visible-arrow="false"
      popper-class="project-popover"
      trigger="hover"
    >
      <div v-on:click="hidePopover(project.name + 'popover')">
        <el-container>
          <el-main>
            <el-row class="project-popover__header">
              <div class="project-popover__header__owner">{{ project.owner }}</div>
              <div class="project-popover__header__name">{{ project.name }}</div>

              <template v-if="project.weeks === 0">
                <div class="project-popover__header__progress">TBD</div>
              </template>
              <template v-else-if="project.weeks != project.weeksNotToDo">
                <div class="project-popover__header__progress">{{ project.progress + '%' }}</div>
                <div class="project-popover__header__weeks">
                  <strong>{{ project.weeksDone }}</strong>
                  of {{ project.weeks }} weeks
                </div>
              </template>
              <template v-else>
                <div class="project-popover__header__progress">Cancelled</div>
              </template>
            </el-row>
            <el-row class="project-popover__progress">
              <div
                v-if="project.weeks != project.weeksNotToDo"
                class="progress-line"
                v-bind:style="{'--percentage': project.progress + '%', '--percentage-with-in-progress': project.progressWithInProgress + '%', '--percentage-not-to-do': project.percentageNotToDo + '%'}"
              >
                <div></div>
              </div>
            </el-row>
            <el-row class="project-popover__epics">
              <div
                class="project-popover__epic"
                :class="epic.status | healthClassFromStatus"
                v-for="epic in project.epics"
                :key="epic.name"
              >
                <div class="project-popover__epic__name">{{ epic.name }}</div>
                <div class="project-popover__epic__effort">
                  {{ epic.effort }}
                  <span v-if="epic.effort <= 1">week</span>
                  <span v-else>weeks</span>
                </div>
                <div class="project-popover__epic__status">{{ epic.status | displayStatus }}</div>
              </div>
            </el-row>
          </el-main>
        </el-container>
      </div>
    </el-popover>
    <el-container>
      <el-main
        v-popover="project.name + 'popover'"
        class="epic-container-column__project__internal"
      >
        <el-row>
          <div>
            <div v-if="showArea" class="epic-container-column__project__area">{{ project.area }}</div>
            <div class="epic-container-column__project__title">{{ project.name }}</div>
            <div v-if="project.weeks === 0" class="epic-container-column__project__epic-counts">TBD</div>
            <div v-else-if="project.weeks != project.weeksNotToDo" class="epic-container-column__project__epic-counts">
              <strong>{{ project.weeksDone }}</strong>
              of {{ project.weeks }} wks
            </div>
            <div v-else class="epic-container-column__project__epic-counts">Cancelled</div>
          </div>
        </el-row>
        <el-row>
          <div>
            <div
              class="progress-line"
              v-bind:style="{'--percentage': project.progress + '%', '--percentage-with-in-progress': project.progressWithInProgress + '%', '--percentage-not-to-do': project.percentageNotToDo + '%'}"
            >
              <div></div>
            </div>
            <div v-if="project.progress == 100" class="progress-percentage done">
              <i class="el-icon-trophy"></i>100%
            </div>
            <div v-else class="progress-percentage">{{ project.progress }}%</div>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'project-list-item',

  props: ['project', 'showArea'],

  methods: {
    hidePopover(id) {
      if (!this.$refs[id]) return

      this.$refs[id].doClose()

      // Not proud of the following but it's a dirty hack to prevent flickering on hide by click :(
      setTimeout(() => { this.$refs[id].doClose(); }, 100)
      setTimeout(() => { this.$refs[id].doClose(); }, 200)
      setTimeout(() => { this.$refs[id].doClose(); }, 300)
    }
  }
}
</script>