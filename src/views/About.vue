<template>
  <div class="row d-flex justify-content-center about p-5">
    <!-- table -->
    <div>
      <h4 class="h5 text-muted mt-3">Striped</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Language</th>
            <th scope="col">Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>England</td>
            <td>English</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>France</td>
            <td>French</td>
            <td>Paris</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Germany</td>
            <td>German</td>
            <td>Berlin</td>
          </tr>
        </tbody>
      </table>
      <h4 class="h5 text-muted mt-3">Hover</h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Language</th>
            <th scope="col">Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>England</td>
            <td>English</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>France</td>
            <td>French</td>
            <td>Paris</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Germany</td>
            <td>German</td>
            <td>Berlin</td>
          </tr>
        </tbody>
      </table>
      <h4 class="h5 text-muted mt-3">Striped and hover</h4>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Language</th>
            <th scope="col">Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>England</td>
            <td>English</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>France</td>
            <td>French</td>
            <td>Paris</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Germany</td>
            <td>German</td>
            <td>Berlin</td>
          </tr>
        </tbody>
      </table>
      <h4 class="h5 text-muted mt-3">Active row or cell</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Language</th>
            <th scope="col">Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-active">
            <th scope="row">1</th>
            <td>England</td>
            <td>English</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>France</td>
            <td>French</td>
            <td>Paris</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td class="table-active">Germany</td>
            <td>German</td>
            <td>Berlin</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- image -->
    <figure class="figure">
      <img src="../assets/image/l.jpg" class="figure-img img-fluid" />
      <figcaption class="figure-caption">caption for figure</figcaption>
    </figure>

    <!-- float -->
    <div class="clear-fix">
      <h4 class="h5 text-muted mt-3">Float left</h4>
      <div class="float-sm-start">Float left for breakpoints sm and up</div>
      <br />
      <div class="float-md-start">Float left for breakpoints md and up</div>
      <br />
      <div class="float-lg-start">Float left for breakpoints lg and up</div>
      <br />
      <div class="float-xl-start">Float left for breakpoints xl and up</div>
      <br />
      <div class="float-xxl-start">Float left for breakpoints xxl and up</div>
      <br />
      <h4 class="h5 text-muted mt-3">Float right</h4>
      <div class="float-sm-end">Float right for breakpoints sm and up</div>
      <br />
      <div class="float-md-end">Float right for breakpoints md and up</div>
      <br />
      <div class="float-lg-end">Float right for breakpoints lg and up</div>
      <br />
      <div class="float-xl-end">Float right for breakpoints xl and up</div>
      <br />
      <div class="float-xxl-end">Float right for breakpoints xxl and up</div>
      <br />
      <h4 class="h5 text-muted mt-3">Float none</h4>
      <div class="float-sm-none">Don't float for breakpoints sm and up</div>
      <br />
      <div class="float-md-none">Don't float for breakpoints md and up</div>
      <br />
      <div class="float-lg-none">Don't float for breakpoints lg and up</div>
      <br />
      <div class="float-xl-none">Don't float for breakpoints xl and up</div>
      <br />
      <div class="float-xxl-none">Don't float for breakpoints xxl and up</div>
      <br />
    </div>

    <!-- border -->
    <div>
      <div class="border border-warning w-25 py-5">scasc</div>
      <div class="border border-3 border-info rounded w-25 py-5 mt-3">scasc</div>
    </div>

    <!-- datalist -->
    <label for="datalist" class="form-label">Datalist label</label>
    <input
      class="form-control"
      list="datalistOptions"
      id="datalist"
      placeholder="Type to search..."
    />
    <datalist id="datalistOptions">
      <option value="Bootstrap"></option>
      <option value="Foundation"></option>
      <option value="Semantic UI"></option>
      <option value="Bulma"></option>
      <option value="Materialize"></option>
    </datalist>

    <!-- select -->
    <label for="inputSelectSmall" class="form-label">Small select</label>
    <select class="form-select form-select-sm" aria-label="Small select" id="inputSelectSmall">
      <option>Select option</option>
      <option value="1">Option one</option>
      <option value="2">Option two</option>
      <option value="3">Option three</option>
      <option value="4">Option four</option>
      <option value="5">Option five</option>
    </select>

    <!-- radio checkbox -->
    <div>
      <h4 class="h5 text-muted mt-3">Check</h4>
      <div class="form-check form-check-inline">
        <input type="checkbox" class="form-check-input" id="checkInline1" />
        <label class="form-check-label" for="checkInline1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="checkbox" class="form-check-input" id="checkInline2" />
        <label class="form-check-label" for="checkInline2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="checkbox" class="form-check-input" id="checkInline3" />
        <label class="form-check-label" for="checkInline3">3</label>
      </div>
      <h4 class="h5 text-muted mt-3">Radio</h4>
      <div class="form-check form-check-inline">
        <input type="radio" class="form-check-input" name="radioInline" id="radioInline1" />
        <label class="form-check-label" for="radioInline1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="radio" class="form-check-input" name="radioInline" id="radioInline2" />
        <label class="form-check-label" for="radioInline2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="radio" class="form-check-input" name="radioInline" id="radioInline3" />
        <label class="form-check-label" for="radioInline3">3</label>
      </div>
    </div>

    <!-- toggle buttons -->
    <div>
      <h4 class="h5 text-muted mt-3">Checkbox</h4>
      <input type="checkbox" class="btn-check" id="checkToggleButton1" autocomplete="off" />
      <label class="btn btn-secondary" for="checkToggleButton1">Checkbox</label>
      <h4 class="h5 text-muted mt-3">Radio</h4>
      <div class="btn-group">
        <input
          type="radio"
          class="btn-check"
          name="radioToggleButton"
          id="radioToggleButton1"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="radioToggleButton1">Radio 1</label>
        <input
          type="radio"
          class="btn-check"
          name="radioToggleButton"
          id="radioToggleButton2"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="radioToggleButton2">Radio 2</label>
        <input
          type="radio"
          class="btn-check"
          name="radioToggleButton"
          id="radioToggleButton3"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="radioToggleButton3">Radio 3</label>
      </div>
      <h4 class="h5 text-muted mt-3">Outlined</h4>
      <input type="checkbox" class="btn-check" id="checkToggleButtonOutlined1" autocomplete="off" />
      <label class="btn btn-outline-secondary" for="checkToggleButtonOutlined1">Checkbox</label>
      <br /><br />
      <div class="btn-group">
        <input
          type="radio"
          class="btn-check"
          name="radioToggleButtonOutlined"
          id="radioToggleButtonOutlined1"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="radioToggleButtonOutlined1">Radio 1</label>
        <input
          type="radio"
          class="btn-check"
          name="radioToggleButtonOutlined"
          id="radioToggleButtonOutlined2"
          autocomplete="off"
        />
        <label class="btn btn-outline-success" for="radioToggleButtonOutlined2">Radio 2</label>
        <input
          type="radio"
          class="btn-check"
          name="radioToggleButtonOutlined"
          id="radioToggleButtonOutlined3"
          autocomplete="off"
        />
        <label class="btn btn-outline-info" for="radioToggleButtonOutlined3">Radio 3</label>
      </div>
    </div>

    <!-- Flush -->
    <div class="p-5">
      <div class="accordion accordion-flush" id="accordionFlush">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFlushOne">
            <button
              type="button"
              class="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFlushOne"
              aria-expanded="true"
              aria-controls="collapseFlushOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseFlushOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingFlushOne"
            data-bs-parent="#accordionFlush"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis posuere
              consequat. Nulla fermentum sodales augue, vitae ornare eros ornare quis. Donec lectus
              est, congue eu risus quis, tempus sagittis nunc. Donec blandit accumsan augue eu
              bibendum. Suspendisse pretium facilisis sapien, ac dignissim leo. Phasellus fermentum
              nulla eget quam congue sagittis. Donec volutpat vel sapien sit amet lobortis. Aenean
              non vulputate nunc, eu luctus libero.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFlushTwo">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFlushTwo"
              aria-expanded="false"
              aria-controls="collapseFlushTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseFlushTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingFlushTwo"
            data-bs-parent="#accordionFlush"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis posuere
              consequat. Nulla fermentum sodales augue, vitae ornare eros ornare quis. Donec lectus
              est, congue eu risus quis, tempus sagittis nunc. Donec blandit accumsan augue eu
              bibendum. Suspendisse pretium facilisis sapien, ac dignissim leo. Phasellus fermentum
              nulla eget quam congue sagittis. Donec volutpat vel sapien sit amet lobortis. Aenean
              non vulputate nunc, eu luctus libero.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFlushThree">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFlushThree"
              aria-expanded="false"
              aria-controls="collapseFlushThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseFlushThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingFlushThree"
            data-bs-parent="#accordionFlush"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis posuere
              consequat. Nulla fermentum sodales augue, vitae ornare eros ornare quis. Donec lectus
              est, congue eu risus quis, tempus sagittis nunc. Donec blandit accumsan augue eu
              bibendum. Suspendisse pretium facilisis sapien, ac dignissim leo. Phasellus fermentum
              nulla eget quam congue sagittis. Donec volutpat vel sapien sit amet lobortis. Aenean
              non vulputate nunc, eu luctus libero.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- alert -->
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <strong>Success!</strong> This alert will fade away when clicking the × button.
    </div>

    <!-- Button with badge -->
    <div>
      <button class="btn btn-secondary">
        Notifications <span class="badge bg-light text-dark">10</span>
      </button>
    </div>

    <div dir="ltr">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Sports</a></li>
          <li class="breadcrumb-item"><a href="#">Ball games</a></li>
          <li class="breadcrumb-item active" aria-current="page">Baseball</li>
        </ol>
      </nav>
    </div>

    <!-- button -->
    <div>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>
  </div>
</template>
